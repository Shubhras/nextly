"use strict";
exports.id = 1874;
exports.ids = [1874];
exports.modules = {

/***/ 1874:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1674);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    login: (user)=>{
        return axios__WEBPACK_IMPORTED_MODULE_1___default().post(`${_config__WEBPACK_IMPORTED_MODULE_0__.API_URL}/users/loginuser`, user).then((res)=>{
            return res.data;
        }).catch(()=>{
            return {
                isAuthenticated: false,
                user: {
                    username: "",
                    role: "",
                    id: "",
                    name: "",
                    image: "",
                    phone: ""
                }
            };
        });
    },
    register: (user)=>{
        return axios__WEBPACK_IMPORTED_MODULE_1___default().post(`${_config__WEBPACK_IMPORTED_MODULE_0__.API_URL}/users/register`, user).then((res)=>{
            return res.data;
        }).catch((err)=>{
            return {
                error: err
            };
        });
    },
    logout: ()=>{
        return axios__WEBPACK_IMPORTED_MODULE_1___default().get(`${_config__WEBPACK_IMPORTED_MODULE_0__.API_URL}/users/logout`).then((res)=>{
            return res.data;
        }).catch((err)=>{
            return {
                error: err
            };
        });
    },
    isAuthenticated: ()=>{
        return axios__WEBPACK_IMPORTED_MODULE_1___default().get(`${_config__WEBPACK_IMPORTED_MODULE_0__.API_URL}/users/authenticateduser`).then((res)=>{
            return res.data;
        }).catch(()=>{
            return {
                isAuthenticated: false,
                user: {
                    username: "",
                    id: "",
                    name: "",
                    image: "",
                    phone: ""
                }
            };
        });
    }
});


/***/ })

};
;