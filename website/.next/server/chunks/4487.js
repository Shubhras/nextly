"use strict";
exports.id = 4487;
exports.ids = [4487];
exports.modules = {

/***/ 4487:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Y": () => (/* binding */ wrapper)
});

// EXTERNAL MODULE: external "redux-thunk"
var external_redux_thunk_ = __webpack_require__(8417);
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_);
// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__(6695);
// EXTERNAL MODULE: ./redux/types.js
var types = __webpack_require__(2509);
// EXTERNAL MODULE: ../config.js
var config = __webpack_require__(1674);
;// CONCATENATED MODULE: ./redux/reducers/Settings.js


const initialSettings = {
    locale: config.defaultLanguage,
    collapsed: false,
    settings: {},
    errorFetch: ""
};
const settings = (state = initialSettings, action)=>{
    switch(action.type){
        case types/* SWITCH_LANGUAGE */.fL:
            return {
                ...state,
                locale: action.payload
            };
        case types/* CHANGE_COLLAPSED */.Zb:
            return {
                ...state,
                collapsed: action.payload
            };
        case types/* GET_SETTINGS */.pV:
            return {
                ...state,
                settings: action.payload
            };
        case types/* GET_ALL_FETCH_FAIL */["if"]:
            return {
                ...state,
                errorFetch: action.payload
            };
        default:
            return state;
    }
};
/* harmony default export */ const Settings = (settings);

;// CONCATENATED MODULE: ./redux/reducers/Login.js

const INIT_STATE = {
    user: {
        name: "",
        address: [],
        role: {
            blabla: false
        }
    },
    isAuthenticated: false
};
const States = (state = INIT_STATE, action)=>{
    switch(action.type){
        case types/* SET_ISAUTHENTICATED */.jE:
            {
                return {
                    ...state,
                    isAuthenticated: action.payload
                };
            }
        case types/* SET_LOGIN */.rm:
            {
                return {
                    ...state,
                    user: action.payload
                };
            }
        case types/* SET_LOGOUT */.a9:
            {
                return {
                    ...state,
                    user: {
                        role: {
                            view: "try"
                        }
                    },
                    isAuthenticated: false
                };
            }
        default:
            return state;
    }
};
/* harmony default export */ const Login = (States);

;// CONCATENATED MODULE: ./redux/reducers/Brands.js

const Brands_initialSettings = {
    brands: []
};
const brands = (state = Brands_initialSettings, action)=>{
    switch(action.type){
        case types/* BRANDS_FETCH */.al:
            return {
                ...state,
                brands: action.payload
            };
        default:
            return state;
    }
};
/* harmony default export */ const Brands = (brands);

;// CONCATENATED MODULE: ./redux/reducers/FilterProducts.js

const FilterProducts_initialSettings = {
    filterProducts: {
        brands: [],
        categories: [],
        text: "",
        variants: [],
        minPrice: null,
        maxPrice: null,
        sort: "",
        limit: 0,
        skip: 0
    }
};
const FilterProducts_brands = (state = FilterProducts_initialSettings, action)=>{
    switch(action.type){
        case types/* FILTER_PRODUCTS */.xU:
            return {
                ...state,
                filterProducts: action.payload
            };
        case types/* FILTER_RESET */.ux:
            return {
                ...state,
                filterProducts: {
                    brands: [],
                    categories: [],
                    text: "",
                    variants: [],
                    minPrice: null,
                    maxPrice: null
                }
            };
        default:
            return state;
    }
};
/* harmony default export */ const FilterProducts = (FilterProducts_brands);

;// CONCATENATED MODULE: ./redux/reducers/Categories.js

const Categories_initialSettings = {
    categories: []
};
const categories = (state = Categories_initialSettings, action)=>{
    switch(action.type){
        case types/* CATEGORIES_FETCH */.h0:
            return {
                ...state,
                categories: action.payload
            };
        default:
            return state;
    }
};
/* harmony default export */ const Categories = (categories);

;// CONCATENATED MODULE: ./redux/reducers/Basket.js

const Basket_initialSettings = {
    basket: [
        {
            created_user: {
                name: "",
                id: ""
            },
            customer_id: "",
            products: []
        }, 
    ]
};
const basket = (state = Basket_initialSettings, action)=>{
    switch(action.type){
        case types/* BASKET_FETCH */.Ur:
            return {
                ...state,
                basket: action.payload
            };
        default:
            return state;
    }
};
/* harmony default export */ const Basket = (basket);

;// CONCATENATED MODULE: ./redux/reducers/Topmenu.js

const Topmenu_initialSettings = {
    topmenu: []
};
const topmenu = (state = Topmenu_initialSettings, action)=>{
    switch(action.type){
        case types/* TOPMENU_FETCH */.zD:
            return {
                ...state,
                topmenu: action.payload
            };
        default:
            return state;
    }
};
/* harmony default export */ const Topmenu = (topmenu);

;// CONCATENATED MODULE: ./redux/reducers/index.js








const reducers = (0,external_redux_.combineReducers)({
    settings: Settings,
    login: Login,
    brands: Brands,
    filterProducts: FilterProducts,
    categories: Categories,
    basket: Basket,
    topmenu: Topmenu
});
/* harmony default export */ const redux_reducers = (reducers);

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__(5648);
;// CONCATENATED MODULE: ./redux/store.js




const bindMiddleware = (middleware)=>{
    if (false) {}
    return (0,external_redux_.applyMiddleware)(...middleware);
};
const reducer = (state, action)=>{
    if (action.type === external_next_redux_wrapper_.HYDRATE) {
        const nextState = {
            ...state,
            ...action.payload
        };
        return nextState;
    } else {
        return redux_reducers(state, action);
    }
};
const initStore = ()=>{
    return (0,external_redux_.createStore)(reducer, bindMiddleware([
        (external_redux_thunk_default())
    ]));
};
const wrapper = (0,external_next_redux_wrapper_.createWrapper)(initStore);


/***/ })

};
;