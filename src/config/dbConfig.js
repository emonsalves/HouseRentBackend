require("dotenv").config()

const credentials = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_HOST,
    database: process.env.DB_NAME,
    allowExitOnIdle: true,
}

module.exports = { credentials }
