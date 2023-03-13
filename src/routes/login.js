const express = require('express')
const { userLogin } = require("../controllers/login");
const { reporting } = require("../middlewares");

const router = express.Router()

router
    .post("", reporting, validateBody(loginSchema), userLogin);

module.exports = router