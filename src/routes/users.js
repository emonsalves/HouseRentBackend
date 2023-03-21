const { Router } = require('express')

const { getOne, addNewUser, getAll } = require("../controllers/user");
const { reporting } = require("../middlewares/reporting");
const { checkToken, verifyToken } = require("../middlewares/jwt");
const { validateBody } = require("../middlewares/validation");
const { newUserSchema } = require("../models/userSchema")

const router = Router()

router
    .get("", reporting, checkToken, verifyToken, getOne)
    .post("", reporting, validateBody(newUserSchema), addNewUser)

module.exports = router;