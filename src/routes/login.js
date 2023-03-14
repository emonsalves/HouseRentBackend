const { Router } = require('express')
const { userLogin } = require("../controllers/login");
// const { loginSchema } = require("../models/loginSchema");
// const { reporting } = require("../middlewares");


const router = Router()

router
    // .post("", reporting, validateBody(loginSchema), userLogin);
    .post("", userLogin);


module.exports = router