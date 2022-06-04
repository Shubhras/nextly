"use strict";
exports.id = 4840;
exports.ids = [4840];
exports.modules = {

/***/ 4840:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "z3": () => (/* reexport */ filterProducts_r),
  "XJ": () => (/* reexport */ getBasket_r),
  "LG": () => (/* reexport */ getBrands_r),
  "su": () => (/* reexport */ getCategories_r),
  "tq": () => (/* reexport */ getTopmenu_r),
  "c8": () => (/* reexport */ isAuthenticated_r),
  "oL": () => (/* reexport */ login_r),
  "j8": () => (/* reexport */ logout_r),
  "gp": () => (/* reexport */ settings_r),
  "j7": () => (/* reexport */ updateBasket_r)
});

// UNUSED EXPORTS: changeCollapsed_r, filterReset_r, switchLanguage

// EXTERNAL MODULE: ./redux/types.js
var types = __webpack_require__(2509);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ../config.js
var config = __webpack_require__(1674);
;// CONCATENATED MODULE: ./redux/actions/Setting.js



function switchLanguage(locale) {
    return {
        type: SWITCH_LANGUAGE,
        payload: locale
    };
}
function changeCollapsed_r(collapsed) {
    return {
        type: CHANGE_COLLAPSED,
        payload: collapsed
    };
}
const settings_r = ()=>async (dispatch)=>{
        await external_axios_default().get(`${config.API_URL}/settingspublic`).then((res)=>{
            dispatch({
                type: types/* GET_SETTINGS */.pV,
                payload: res.data
            });
        }).catch((err)=>{
            dispatch({
                type: types/* GET_ALL_FETCH_FAIL */["if"],
                payload: err.message + ": " + err.config.url.replace(config.API_URL, "api")
            });
        });
    }
;

;// CONCATENATED MODULE: ./redux/actions/Login.js

const login_r = (data)=>{
    return {
        type: types/* SET_LOGIN */.rm,
        payload: data
    };
};
const logout_r = ()=>{
    return {
        type: types/* SET_LOGOUT */.a9
    };
};
function isAuthenticated_r(isAuthenticated) {
    return {
        type: types/* SET_ISAUTHENTICATED */.jE,
        payload: isAuthenticated
    };
}

;// CONCATENATED MODULE: ./redux/actions/Brands.js



const getBrands_r = ()=>async (dispatch)=>{
        await external_axios_default().get(`${config.API_URL}/brandspublic`).then((res)=>{
            dispatch({
                type: types/* BRANDS_FETCH */.al,
                payload: res.data
            });
        }).catch((err)=>{
            dispatch({
                type: types/* GET_ALL_FETCH_FAIL */["if"],
                payload: err.message + ": " + err.config.url.replace(config.API_URL, "api")
            });
        });
    }
;

;// CONCATENATED MODULE: ./redux/actions/FilterProducts.js

const filterProducts_r = (data)=>{
    return {
        type: types/* FILTER_PRODUCTS */.xU,
        payload: data
    };
};
const filterReset_r = ()=>{
    return {
        type: FILTER_RESET
    };
};

;// CONCATENATED MODULE: ./redux/actions/Categories.js



const getCategories_r = ()=>async (dispatch)=>{
        await external_axios_default().get(`${config.API_URL}/categoriespublic/true`).then((res)=>{
            dispatch({
                type: types/* CATEGORIES_FETCH */.h0,
                payload: res.data
            });
        }).catch((err)=>{
            dispatch({
                type: types/* GET_ALL_FETCH_FAIL */["if"],
                payload: err.message + ": " + err.config.url.replace(config.API_URL, "api")
            });
        });
    }
;

;// CONCATENATED MODULE: ./redux/actions/Basket.js



const updateBasket_r = (data)=>{
    return {
        type: types/* BASKET_FETCH */.Ur,
        payload: data
    };
};
const getBasket_r = (id)=>async (dispatch)=>{
        if (id) {
            await external_axios_default().get(`${config.API_URL}/basket/customer/${id}`).then((res)=>{
                dispatch({
                    type: types/* BASKET_FETCH */.Ur,
                    payload: res.data
                });
            });
        }
    }
;

;// CONCATENATED MODULE: ./redux/actions/Topmenu.js



const getTopmenu_r = ()=>async (dispatch)=>{
        await external_axios_default().get(`${config.API_URL}/topmenupublic/not`).then((res)=>{
            dispatch({
                type: types/* TOPMENU_FETCH */.zD,
                payload: res.data
            });
        }).catch((err)=>{
            dispatch({
                type: types/* GET_ALL_FETCH_FAIL */["if"],
                payload: err.message + ": " + err.config.url.replace(config.API_URL, "api")
            });
        });
    }
;

;// CONCATENATED MODULE: ./redux/actions/index.js









/***/ }),

/***/ 2509:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ur": () => (/* binding */ BASKET_FETCH),
/* harmony export */   "Zb": () => (/* binding */ CHANGE_COLLAPSED),
/* harmony export */   "a9": () => (/* binding */ SET_LOGOUT),
/* harmony export */   "al": () => (/* binding */ BRANDS_FETCH),
/* harmony export */   "fL": () => (/* binding */ SWITCH_LANGUAGE),
/* harmony export */   "h0": () => (/* binding */ CATEGORIES_FETCH),
/* harmony export */   "if": () => (/* binding */ GET_ALL_FETCH_FAIL),
/* harmony export */   "jE": () => (/* binding */ SET_ISAUTHENTICATED),
/* harmony export */   "pV": () => (/* binding */ GET_SETTINGS),
/* harmony export */   "rm": () => (/* binding */ SET_LOGIN),
/* harmony export */   "ux": () => (/* binding */ FILTER_RESET),
/* harmony export */   "xU": () => (/* binding */ FILTER_PRODUCTS),
/* harmony export */   "zD": () => (/* binding */ TOPMENU_FETCH)
/* harmony export */ });
const SWITCH_LANGUAGE = "SWITCH-LANGUAGE";
//Login
const SET_LOGIN = "SET_LOGIN";
const SET_ISAUTHENTICATED = "SET_ISAUTHENTICATED";
const SET_LOGOUT = "SET_LOGOUT";
const CHANGE_COLLAPSED = "CHANGE_COLLAPSED";
// Customize const
const GET_SETTINGS = "GET_SETTINGS";
const GET_ALL_FETCH_FAIL = "GET_ALL_FETCH_FAIL";
//brands
const BRANDS_FETCH = "BRANDS_FETCH";
//Categories
const CATEGORIES_FETCH = "CATEGORIES_FETCH";
//filter Products
const FILTER_PRODUCTS = "FILTER_PRODUCTS";
const FILTER_RESET = "FILTER_RESET";
//Basket
const BASKET_FETCH = "BASKET_FETCH";
//Topmenu
const TOPMENU_FETCH = "TOPMENU_FETCH";


/***/ })

};
;