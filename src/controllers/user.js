const { getUsers, getUser, registerUser } = require("../models/users");
const { encryptPassword } = require("../helpers/encrypt");
const jwt = require("jsonwebtoken");

const getAll = async (req, res) => {
  try {
    const users = await getUsers();
    res.json(users);
  } catch (error) {
    res.status(error.code || 500).send(error);
  }
};

const getOne = async (req, res) => {
  try {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const email = decoded.email;
    console.log(email)
    const user = await getUser(email);
    const { password, ...userWithoutPassword } = user;
    res.json(userWithoutPassword);
  } catch (error) {
    res.status(error.code || 500).send(error);
  }
};

const addNewUser = async (req, res) => {
  try {
    const user = req.body;
    user.password = await encryptPassword(user.password);
    await registerUser(user);
    res.send("Usuario creado con éxito");
  } catch (error) {
    res.status(500).send(error);
  }
};
module.exports = { getAll, getOne, addNewUser };