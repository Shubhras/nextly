"use strict";
(() => {
var exports = {};
exports.id = 5426;
exports.ids = [5426,313];
exports.modules = {

/***/ 1588:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3015);
/* harmony import */ var _ProductCard_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2480);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3877);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_1__, swiper__WEBPACK_IMPORTED_MODULE_3__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_1__, swiper__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



// import Swiper core and required modules

// install Swiper modules
swiper__WEBPACK_IMPORTED_MODULE_3__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_3__.Navigation,
    swiper__WEBPACK_IMPORTED_MODULE_3__.Thumbs,
    swiper__WEBPACK_IMPORTED_MODULE_3__.Autoplay
]);
const Default = ({ state =[] , title ={
    title: "",
    description: ""
}  })=>{
    return(// <div className="bg-gray-100 ">
    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: " mx-auto w-11/12 py-5 ",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: " relative homeSliderReslative mb-3 pb-0 ",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: " w-full ",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: " text-center mb-5 mt-3",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        children: title.title
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        className: "text-lg ",
                                        children: title.description
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_1__.Swiper, {
                                slidesPerView: 1,
                                spaceBetween: 10,
                                style: {
                                    "--swiper-navigation-color": "#000",
                                    "--swiper-pagination-color": "#000"
                                },
                                autoplay: {
                                    delay: 4000,
                                    disableOnInteraction: true
                                },
                                breakpoints: {
                                    340: {
                                        slidesPerView: 1,
                                        spaceBetween: 0
                                    },
                                    640: {
                                        slidesPerView: 2,
                                        spaceBetween: 0
                                    },
                                    768: {
                                        slidesPerView: 3,
                                        spaceBetween: 0
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                        spaceBetween: 0
                                    },
                                    1224: {
                                        slidesPerView: 4,
                                        spaceBetween: 0
                                    }
                                },
                                children: state && state.map((data)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, {
                                        className: "mb-15",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProductCard_home__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                            data: data,
                                            className: " float-left col-span-4 m-5 mb-9 hover:bg-white bg-gray-50 group overflow-hidden shadow-sm hover:shadow-xl "
                                        })
                                    }, data._id)
                                )
                            })
                        ]
                    })
                })
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Default);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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


/***/ }),

/***/ 2480:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ home)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./util/helpers/func.js
var func = __webpack_require__(1541);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./app/components/Price/index.js
var Price = __webpack_require__(313);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
// EXTERNAL MODULE: ../config.js
var config = __webpack_require__(1674);
;// CONCATENATED MODULE: external "react-lazy-load-image-component"
const external_react_lazy_load_image_component_namespaceObject = require("react-lazy-load-image-component");
;// CONCATENATED MODULE: ./app/components/ProductCard/home.js








const Default = ({ data: data1 = null , className  })=>{
    var ref;
    const { settings: settings1  } = (0,external_react_redux_.useSelector)(({ settings  })=>settings
    );
    const getVariantPrice = (data)=>{
        if (data.length > 0) {
            const newData = data.sort((a, b)=>{
                return a.price - b.price;
            });
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Price["default"], {
                        data: newData[0].price
                    }),
                    " -",
                    /*#__PURE__*/ jsx_runtime_.jsx(Price["default"], {
                        data: newData[data.length - 1].price
                    })
                ]
            });
        }
    };
    const allImgData = data1 === null || data1 === void 0 ? void 0 : (ref = data1.allImages) === null || ref === void 0 ? void 0 : ref.sort((a, b)=>a.order - b.order
    );
    const img = allImgData[0] ? config.IMG_URL + allImgData[0].image : "/images/nofoto.jpg";
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: className,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: " relative float-left h-full cursor-pointer ",
            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/product/" + data1.seo,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "w-full float-left",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "w-12/12 float-left relative ",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                    className: `${func/* default.getDiscount */.Z.getDiscount(data1) ? "visible" : "invisible"} absolute z-10 top-0 mt-2 text-xs float-left py-1 px-2 bg-red-600 text-white`,
                                    children: [
                                        settings1.price_type ? "%" + Number(func/* default.getDiscount */.Z.getDiscount(data1)).toFixed(0) : Number(func/* default.getDiscount */.Z.getDiscount(data1)).toFixed(0) + "%",
                                        " ",
                                        "discount"
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_lazy_load_image_component_namespaceObject.LazyLoadImage, {
                                    className: "w-full bg-cover bg-center group-hover:scale-110 transition-all",
                                    src: img,
                                    width: "143",
                                    height: "143",
                                    alt: data1.title
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                    className: "product-links"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: " text-center float-left w-7/12",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: " text-center text-md relative ",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: "w-full text-center float-left h-10 font-semibold overflow-hidden px-1 mt-2 ",
                                            children: data1.title
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "font-semibold",
                                            children: data1.type ? getVariantPrice(data1.variant_products) : /*#__PURE__*/ jsx_runtime_.jsx(Price["default"], {
                                                data: data1.price
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: " line-through text-xs w-full float-left ",
                                            children: !data1.type ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                                children: data1.before_price != 0 ? /*#__PURE__*/ jsx_runtime_.jsx(Price["default"], {
                                                    data: data1.before_price
                                                }) : ""
                                            }) : ""
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Button, {
                                    className: "!bg-brand-color rounded-r rounded-t-none !rounded-b-none !rounded-l absolute bottom-0 right-0 b group-hover:text-white group-hover:shadow-lg text-white",
                                    children: "Details"
                                })
                            ]
                        })
                    ]
                })
            })
        })
    }, data1._id);
};
/* harmony default export */ const home = (Default);


/***/ }),

/***/ 7487:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4840);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1674);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_components_HomePage_HomeSeccoundBoxs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1588);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_app_components_HomePage_HomeSeccoundBoxs__WEBPACK_IMPORTED_MODULE_7__]);
_app_components_HomePage_HomeSeccoundBoxs__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const Head = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(()=>__webpack_require__.e(/* import() */ 9451).then(__webpack_require__.bind(__webpack_require__, 9451))
, {
    loadableGenerated: {
        modules: [
            "product/[seo].js -> " + "../../app/core/Head"
        ]
    }
});
const HomeProductsFirst = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(()=>Promise.all(/* import() */[__webpack_require__.e(3434), __webpack_require__.e(9797)]).then(__webpack_require__.bind(__webpack_require__, 9797))
, {
    loadableGenerated: {
        modules: [
            "product/[seo].js -> " + "../../app/components/HomePage/HomeProductsFirst"
        ]
    }
});
const ProductGallerry = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(()=>__webpack_require__.e(/* import() */ 39).then(__webpack_require__.bind(__webpack_require__, 39))
, {
    loadableGenerated: {
        modules: [
            "product/[seo].js -> " + "../../app/components/ProductDetail/Gallerry"
        ]
    }
});
const PoductVariants = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(()=>__webpack_require__.e(/* import() */ 7951).then(__webpack_require__.bind(__webpack_require__, 7951))
, {
    loadableGenerated: {
        modules: [
            "product/[seo].js -> " + "../../app/components/ProductDetail/PoductVariants"
        ]
    }
});
const Page = ({ resData ={} , seo ="" , resProductSeccond =[] , resProductFirst =[]  })=>{
    const { user  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(({ login  })=>login
    );
    const state = resData[0];
    const { 0: contentDescription , 1: seTcontentDescription  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("<p></p>");
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    const getBasket = (id)=>{
        if (user.id) {
            dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_3__/* .getBasket_r */ .XJ)(id));
        }
    };
    function createMarkup() {
        return {
            __html: contentDescription
        };
    }
    const replaceStyle = (dataHtml)=>{
        return dataHtml.replaceAll("<p>", "<p style='min-height:25px' >").replaceAll("<pre>", "<pre  style='min-height:30px; background-color:#dbdbdb; padding:15px' >").replaceAll("<img ", "<img class='w-full sm:w-auto' ").replaceAll('<div class="media-wrap image-wrap ', '<div class="media-wrap image-wrap  w-full sm:w-auto ');
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        getBasket();
        seTcontentDescription(replaceStyle(state.description));
    }, [
        state.description
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container-custom h-full ",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Head, {
                        title: state.title,
                        description: state.description_short,
                        keywords: state.keys,
                        image: state.allImages.length > 0 ? state.allImages[0].image : ""
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid grid-cols-12 my-0 lg:my-12 ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: " col-span-12 lg:col-span-6 rounded-lg ",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ProductGallerry, {
                                    images: state.allImages
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: " col-span-12 lg:col-span-6",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PoductVariants, {
                                        data: state,
                                        seo: seo
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "ml-10",
                                            dangerouslySetInnerHTML: createMarkup()
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                            children: "Other top rated products"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HomeProductsFirst, {
                state: resProductFirst,
                title: {
                    title: "",
                    description: ""
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mb-12",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_HomePage_HomeSeccoundBoxs__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    state: resProductSeccond,
                    title: {
                        title: "You May Also Like"
                    }
                })
            })
        ]
    });
};
const getServerSideProps = async ({ query  })=>{
    const response = await axios__WEBPACK_IMPORTED_MODULE_4___default().get(`${_config__WEBPACK_IMPORTED_MODULE_5__.API_URL}/productspublic/${query.seo}`);
    const filterObjectFirst = {
        sort: {
            saleqty: -1
        },
        limit: 10,
        skip: 0
    };
    const responseProductFirs = await axios__WEBPACK_IMPORTED_MODULE_4___default().post(`${_config__WEBPACK_IMPORTED_MODULE_5__.API_URL}/productspublic/home`, filterObjectFirst);
    const filterObjectSeccond = {
        sort: {
            createdAt: -1
        },
        limit: 15,
        skip: 0
    };
    const responseProductSeccond = await axios__WEBPACK_IMPORTED_MODULE_4___default().post(`${_config__WEBPACK_IMPORTED_MODULE_5__.API_URL}/productspublic/home`, filterObjectSeccond);
    return {
        props: {
            resData: response.data,
            seo: query.seo,
            resProductFirst: responseProductFirs.data,
            resProductSeccond: responseProductSeccond.data
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

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

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 7085:
/***/ ((module) => {

module.exports = require("react-magnifier");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5152,9505,1664,1674,4840,1541], () => (__webpack_exec__(7487)));
module.exports = __webpack_exports__;

})();