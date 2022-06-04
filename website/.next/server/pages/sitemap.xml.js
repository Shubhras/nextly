"use strict";
(() => {
var exports = {};
exports.id = 2164;
exports.ids = [2164];
exports.modules = {

/***/ 9641:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ sitemap_xml),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ../config.js
var config = __webpack_require__(1674);
;// CONCATENATED MODULE: external "fs"
const external_fs_namespaceObject = require("fs");
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_namespaceObject);
;// CONCATENATED MODULE: ./pages/sitemap.xml.js



const Sitemap = ()=>{};
const getServerSideProps = async ({ res  })=>{
    const resDataProducts = await external_axios_default().get(`${config.API_URL}/productspublic/all`);
    const resDataTopmenu = await external_axios_default().get(`${config.API_URL}/topmenupublic/not`);
    function escapeHtml(text) {
        var map = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#039;"
        };
        return config.WEBSITE_URL + text.replace(/[&<>"']/g, function(m) {
            return map[m];
        });
    }
    const baseUrl = config.WEBSITE_URL;
    const staticPages = external_fs_default().readdirSync("pages").filter((staticPage)=>{
        return ![
            "_app.js",
            "_document.js",
            "_error.js",
            "homepage.js",
            "sitemap.xml.js", 
        ].includes(staticPage);
    }).map((staticPagePath)=>{
        return `${baseUrl}/${staticPagePath}`;
    });
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticPages.map((url)=>{
        return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>0.5</priority>
            </url>
          `;
    }).join("")}

      ${resDataTopmenu.data.map((url)=>{
        if (!url.link.includes("http")) {
            return `
                <url>
                  <loc>${url.link !== "" ? escapeHtml(url.link) : config.WEBSITE_URL + "/content/" + url.seo}</loc>
                  <lastmod>${new Date().toISOString()}</lastmod>
                  <changefreq>monthly</changefreq>
                  <priority>0.9</priority>
                </url >
              `;
        }
    }).join("")}

      ${resDataProducts.data.map((url)=>{
        return `
                <url>
                  <loc>${config.WEBSITE_URL}/product/${url.seo}</loc>
                  <lastmod>${new Date().toISOString()}</lastmod>
                  <changefreq>monthly</changefreq>
                  <priority>1</priority>
                </url>
              `;
    }).join("")}
    </urlset>
  `;
    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();
    return {
        props: {}
    };
};
/* harmony default export */ const sitemap_xml = (Sitemap);


/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1674], () => (__webpack_exec__(9641)));
module.exports = __webpack_exports__;

})();