const { checkPassword } = require("../helpers/encrypt");
const { generateToken } = require("../middlewares/jwt");

require("dotenv").config();

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await checkPassword(email, password);
    const token = generateToken(user.email, process.env.SECRET_KEY);
    res.send(token);
  } catch (error) {
    console.log(error);
    res.status(error.code || 500).send(error);
  }
};

module.exports = { userLogin };