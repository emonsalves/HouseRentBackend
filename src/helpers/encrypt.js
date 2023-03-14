const bcrypt = require("bcryptjs");
const { getUser } = require("../models/users");

const encryptPassword = (password) => {
  return bcrypt.hashSync(password);
};

const checkPassword = async (email, password) => {
  try {
    const user = await getUser(email);
    const encryptedPass = user.password;
    // console.log(password, encryptedPass);
    // const passwordMatch = bcrypt.compareSync(password, encryptedPass);
    if (!passwordMatch) {
      throw { code: 401, message: "Email or password is incorrect" };
    }
    return user;
  } catch (error) {
    throw { code: 500, message: "Internal Server Error" };
  }
};

// module.exports = { encryptPassword, checkPassword };
module.exports = { checkPassword };
