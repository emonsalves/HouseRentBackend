const {  getOne, addNewUser } = require("../controllers/user");
const { reporting } = require("../middlewares");
const { checkToken, verifyToken } = require("../middlewares");
const { validateBody } = require("../middlewares");
const { newUserSchema } = require("../models/userSchema");

const router = Router();

router.get("", reporting, checkToken, verifyToken, getOne);
router.post("", reporting, validateBody(newUserSchema), addNewUser);

module.exports = router;