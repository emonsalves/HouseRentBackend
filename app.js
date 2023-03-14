const express = require("express")
const cors = require("cors")
const morgan = require('morgan');

const app = express()

// Middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'));

// Routes
app.use(express.static(('public')))
app.use('/v1/', require('./src/routes'))

module.exports = app