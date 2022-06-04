"use strict";
(() => {
var exports = {};
exports.id = 569;
exports.ids = [569];
exports.modules = {

/***/ 6091:
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
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1674);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_6__);







const IntlMessages = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(()=>__webpack_require__.e(/* import() */ 2076).then(__webpack_require__.bind(__webpack_require__, 2076))
, {
    loadableGenerated: {
        modules: [
            "resetpassword.js -> " + "../util/IntlMessages"
        ]
    }
});
const SignInPage = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const { token: token1  } = router.query;
    const { 0: username , 1: seTusername  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const getUserWithToken = async (token)=>{
        await axios__WEBPACK_IMPORTED_MODULE_5___default().get(_config__WEBPACK_IMPORTED_MODULE_3__.API_URL + "/users/reset?resetPasswordToken=" + token).then((res)=>{
            if (res.data.message == "password reset link a-ok") {
                seTusername(res.data.username);
            }
        }).catch((err)=>{
            antd__WEBPACK_IMPORTED_MODULE_2__.message.error("password reset link is invalid or has expired " + err);
            router.push("/forgotpassword");
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        getUserWithToken(token1);
    }, []);
    const onSubmit = (Data)=>{
        axios__WEBPACK_IMPORTED_MODULE_5___default().put(`${_config__WEBPACK_IMPORTED_MODULE_3__.API_URL}/users/updatePasswordViaEmail`, {
            username: username,
            password: Data["password"],
            resetPasswordToken: token1
        }).then((res)=>{
            if (res.data.message == "password reset link is invalid or has expired") {
                antd__WEBPACK_IMPORTED_MODULE_2__.message.error("password reset link is invalid or has expired");
            } else if (res.data.message == "no user exists in db to update") {
                antd__WEBPACK_IMPORTED_MODULE_2__.message.error("no user exists in db to update");
            } else {
                antd__WEBPACK_IMPORTED_MODULE_2__.message.success("Password Updated");
                router.push("/signin");
            }
        }).catch((err)=>console.log(err)
        );
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: " container-custom text-center items-center py-14",
            children: [
                username ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Form, {
                    initialValues: {
                        remember: true
                    },
                    onFinish: onSubmit,
                    layout: "vertical",
                    className: "w-6/12 mx-auto",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {
                            name: "password",
                            label: "Password",
                            rules: [
                                {
                                    message: "Please input your password!"
                                }, 
                            ],
                            hasFeedback: true,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Input.Password, {})
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {
                            name: "confirm",
                            label: "Confirm Password",
                            dependencies: [
                                "password"
                            ],
                            hasFeedback: true,
                            rules: [
                                {
                                    message: "Please confirm your password!"
                                },
                                ({ getFieldValue  })=>({
                                        validator (rule, value) {
                                            if (!value || getFieldValue("password") === value) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject("The two passwords that you entered do not match!");
                                        }
                                    })
                                , 
                            ],
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Input.Password, {})
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                type: "primary",
                                className: "mb-0 w-full",
                                size: "large",
                                htmlType: "submit",
                                children: "Update Password"
                            })
                        })
                    ]
                }) : "",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Button, {
                    type: "link",
                    onClick: ()=>router.push("/signin")
                    ,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(IntlMessages, {
                        id: "app.userAuth.signIn"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignInPage);


/***/ }),

/***/ 5725:
/***/ ((module) => {

module.exports = require("antd");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 3126:
/***/ ((module) => {

module.exports = require("react-intl");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5152,1674], () => (__webpack_exec__(6091)));
module.exports = __webpack_exports__;

})();