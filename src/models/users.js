const { query } = require("../services/dbService");

const getUsers = async () => {
  const queryString = "SELECT * FROM users";
  const { rows: users } = await query(queryString);
  return users;
};

const registerUser = async (user) => {
  let { rut, name, lastName, email, address, phone, password, idRole, idType, active } = user;
  const values = [rut, name, lastName, email, address, phone, password, idRole, idType, active];
  const queryString = "INSERT INTO users VALUES (DEFAULT, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10)";
  await query(queryString, values);
};

const getUser = async (email) => {
  const values = [email];
  const queryString = "SELECT * FROM users WHERE email = $1";
  const {
    rows: [user],
    rowCount,
  } = await query(queryString, values);

  if (!rowCount)
    throw { code: 401, message: "Email o contraseña es incorrecta" };

  return user;
};

module.exports = { getUsers, registerUser, getUser };