exports.id = 1674;
exports.ids = [1674];
exports.modules = {

/***/ 1674:
/***/ ((module) => {


const jsonConfig = {

    //API_URL: "https://backend.nextly.shop",
    //WEBSITE_URL: "https://nextly.shop",
    //IMG_URL: "https://backend.nextly.shop",
    API_URL: "http://139.59.83.155:4002",
    WEBSITE_URL: "http://139.59.83.155:8001",
    IMG_URL: "http://139.59.83.155:4002",

    maillerConfig: {
        // host: 'smtp.gmail.com',
        // port: 465,
        // secure: true,
        // tls: { rejectUnauthorized: true },
        service: 'Gmail',
        auth: {
            user: 'noreplyexamplemail@gmail.com',
            pass: 'noraplymailpassword'
        }
    },

    languageData: [
        {
            languageId: 'english',
            locale: 'en',
            name: 'English',
            icon: 'us'
        },
        {
            languageId: 'turkish',
            locale: 'tr',
            name: 'Türkçe',
            icon: 'tr'
        },

    ],

    defaultLanguage: {
        languageId: 'english',
        locale: 'en',
        name: 'English',
        icon: 'us'
    }
}

if (false) {}


module.exports = jsonConfig

/***/ })

};
;