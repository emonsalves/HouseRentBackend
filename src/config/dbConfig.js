require("dotenv").config()

const credentials = {
    user: process.env.USER_WMS,
    password: process.env.PASSWORD_WMS,
    server: process.env.SERVER_WMS,
    database: process.env.DATABASE_WMS,
    options: {
        encrypt: false,
        trustServerCertificate: true,
    }
}

module.exports = credentials