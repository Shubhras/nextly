"use strict";
(() => {
var exports = {};
exports.id = 5405;
exports.ids = [5405];
exports.modules = {

/***/ 4369:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_helpers_func__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1541);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4487);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1674);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_6__);










//import HomeSeccoundBoxs from '../app/components/HomePage/HomeSeccoundBoxs';
// const HomeFirstBox = dynamic(() => import("../app/components/Home/HomeFirstBox"));
// const HomeSeccoundBoxs = dynamic(() => import("../app/components/Home/HomeSeccoundBoxs"));
// const HomeOfferList = dynamic(() => import("../app/components/Home/HomeOfferList"));
// const HomeProductsFirst = dynamic(() => import("../app/components/Home/HomeProductsFirst"));
// const Brands = dynamic(() => import("../app/components/Brands"));
// const HomeSlider = dynamic(() => import("../app/components/Home/HomeSlider"));
//const HomeFirstBox = dynamic(() => import("../app/components/HomePage/HomeFirstBox"));
//const HomeSeccoundBoxs = dynamic(() => import("../app/components/HomePage/HomeSeccoundBoxs"));
const HomeOfferList = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(()=>Promise.all(/* import() */[__webpack_require__.e(9505), __webpack_require__.e(1664), __webpack_require__.e(5675), __webpack_require__.e(9392)]).then(__webpack_require__.bind(__webpack_require__, 9392))
, {
    loadableGenerated: {
        modules: [
            "index.js -> " + "../app/components/HomePage/HomeOfferList"
        ]
    }
});
const HomeProductsFirst = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(()=>Promise.all(/* import() */[__webpack_require__.e(9505), __webpack_require__.e(1664), __webpack_require__.e(3434), __webpack_require__.e(9693)]).then(__webpack_require__.bind(__webpack_require__, 9797))
, {
    loadableGenerated: {
        modules: [
            "index.js -> " + "../app/components/HomePage/HomeProductsFirst"
        ]
    }
});
const Brands = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(()=>Promise.all(/* import() */[__webpack_require__.e(9505), __webpack_require__.e(1664), __webpack_require__.e(230)]).then(__webpack_require__.bind(__webpack_require__, 230))
, {
    loadableGenerated: {
        modules: [
            "index.js -> " + "../app/components/Brands"
        ]
    }
});
const HomeSlider = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(()=>Promise.all(/* import() */[__webpack_require__.e(9505), __webpack_require__.e(1664), __webpack_require__.e(6828)]).then(__webpack_require__.bind(__webpack_require__, 6828))
, {
    loadableGenerated: {
        modules: [
            "index.js -> " + "../app/components/HomePage/HomeSlider"
        ]
    }
});
const Head = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(()=>__webpack_require__.e(/* import() */ 9451).then(__webpack_require__.bind(__webpack_require__, 9451))
, {
    loadableGenerated: {
        modules: [
            "index.js -> " + "../app/core/Head"
        ]
    }
});
const homePage = ({ resData =[] , resProductFirst =[] ,  })=>{
    var ref, ref1;
    const homeSlider = _util_helpers_func__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getCategoriesTree */ .Z.getCategoriesTree(resData, "61535837020a748d51968ecc");
    // const homeFirstBox = func.getCategoriesTree(
    //    resData,
    //    "61537c2d6464c09286494c63"
    // );
    const homeOfferList = _util_helpers_func__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getCategoriesTree */ .Z.getCategoriesTree(resData, "6154640f79053f941d1b76c9");
    const homeOfferListtitle = {
        title: (ref = resData.filter((val)=>val._id === "6154640f79053f941d1b76c9"
        )) === null || ref === void 0 ? void 0 : ref.title,
        description: (ref1 = resData.filter((val)=>val._id === "6154640f79053f941d1b76c9"
        )) === null || ref1 === void 0 ? void 0 : ref1.description
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Head, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Brands, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HomeSlider, {
                state: homeSlider
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HomeOfferList, {
                state: homeOfferList,
                title: homeOfferListtitle
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "text-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                    children: "Collection Highlight"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "text-center mt-5",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_5__.Button, {
                    children: "VIEW ALL "
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HomeProductsFirst, {
                state: resProductFirst,
                title: {
                    title: "",
                    description: ""
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HomeOfferList, {
                state: homeOfferList,
                title: homeOfferListtitle
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "text-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                    children: "Celebrity Closet"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "text-center mt-5",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_5__.Button, {
                    children: "VIEW ALL "
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HomeProductsFirst, {
                state: resProductFirst,
                title: {
                    title: "",
                    description: ""
                }
            })
        ]
    });
};
const getServerSideProps = _redux_store__WEBPACK_IMPORTED_MODULE_3__/* .wrapper.getServerSideProps */ .Y.getServerSideProps(()=>async ()=>{
        const response = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(`${_config__WEBPACK_IMPORTED_MODULE_4__.API_URL}/homesliderpublic`);
        const filterObjectFirst = {
            sort: {
                saleqty: -1
            },
            limit: 10,
            skip: 0
        };
        const responseProductFirs = await axios__WEBPACK_IMPORTED_MODULE_2___default().post(`${_config__WEBPACK_IMPORTED_MODULE_4__.API_URL}/productspublic/home`, filterObjectFirst);
        const filterObjectSeccond = {
            sort: {
                createdAt: -1
            },
            limit: 15,
            skip: 0
        };
        const responseProductSeccond = await axios__WEBPACK_IMPORTED_MODULE_2___default().post(`${_config__WEBPACK_IMPORTED_MODULE_4__.API_URL}/productspublic/home`, filterObjectSeccond);
        return {
            props: {
                resData: response.data,
                resProductFirst: responseProductFirs.data,
                resProductSeccond: responseProductSeccond.data
            }
        };
    }
);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePage);


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


/***/ }),

/***/ 7066:
/***/ ((module) => {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ 5725:
/***/ ((module) => {

module.exports = require("antd");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 5648:
/***/ ((module) => {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6695:
/***/ ((module) => {

module.exports = require("redux");

/***/ }),

/***/ 8417:
/***/ ((module) => {

module.exports = require("redux-thunk");

/***/ }),

/***/ 3877:
/***/ ((module) => {

module.exports = import("swiper");;

/***/ }),

/***/ 3015:
/***/ ((module) => {

module.exports = import("swiper/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5152,1674,1541,4487], () => (__webpack_exec__(4369)));
module.exports = __webpack_exports__;

})();