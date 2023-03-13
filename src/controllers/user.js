const { getUsers, getUser, registerUser } = require("../models/");
const { encryptPassword } = require("../helpers/");
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
    const user = await getUser(email);
    res.json(user);
  } catch (error) {
    res.status(error.code || 500).send(error);
  }
};

const addNewUser = async (req, res) => {
  try {
    const user = req.body;
    user.password = encryptPassword(user.password);
    await registerUser(user);
    res.send("Usuario creado con éxito");
  } catch (error) {
    res.status(500).send(error);
  }
};
module.exports = { getAll, getOne, addNewUser };