const {Router} = require('express')

const {  getOne, addNewUser, getAll } = require("../controllers/user");
const { reporting } = require("../middlewares/reporting");
const { checkToken, verifyToken } = require("../middlewares/jwt");
const { validateBody } = require("../middlewares/validation");

const router = Router()

// router.get("", reporting, checkToken, verifyToken, getOne);
// router.post("", reporting, validateBody(newUserSchema), addNewUser);
router.get("", getAll)

module.exports = router;