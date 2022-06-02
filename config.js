
const jsonConfig = {

    //API_URL: "https://backend.nextly.shop",
    //WEBSITE_URL: "https://nextly.shop",
    //IMG_URL: "https://backend.nextly.shop",
    API_URL: "http://139.59.83.155:5000",
    WEBSITE_URL: "http://139.59.83.155:8001",
    IMG_URL: "http://139.59.83.155:5000",

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

if (process.env.NODE_ENV == 'development') {
    jsonConfig.API_URL = "http://139.59.83.155:5000"
    jsonConfig.WEBSITE_URL = "http://139.59.83.155:8001"
    jsonConfig.IMG_URL = "http://139.59.83.155:5000"
}


module.exports = jsonConfig