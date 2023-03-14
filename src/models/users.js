const { query } = require("../services/dbService");

const getUsers = async () => {
  const queryString = "SELECT * FROM usuarios";
  const { rows: users } = await query(queryString);
  return users;
};

const registerUser = async (user) => {
  let { email, password, rol, lenguaje } = user;
  const values = [email, password, rol, lenguaje];
  const queryString = "INSERT INTO usuarios VALUES (DEFAULT, $1, $2, $3, $4)";
  await query(queryString, values);
};

const getUser = async (email) => {
  const values = [email];
  const queryString = "SELECT * FROM usuarios WHERE email = $1";
  const {
    rows: [user],
    rowCount,
  } = await query(queryString, values);

  if (!rowCount)
    throw { code: 401, message: "Email o contraseña es incorrecta" };

  return user;
};

module.exports = { getUsers, registerUser, getUser };