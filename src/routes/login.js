const { Router } = require('express')
const { userLogin } = require("../controllers/login");
const { reporting } = require('../middlewares/reporting');
const { validateBody } = require('../middlewares/validation');
const { loginSchema } = require("../models/loginSchema");


const router = Router()

router
    .post("", reporting, validateBody(loginSchema), userLogin);


module.exports = router