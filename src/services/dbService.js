const { Pool } = require("pg");
const { credentials } = require("../config/dbConfig");

const pool = new Pool(credentials);

const query = async (text, params) => {
  try {
    const client = await pool.connect();
    // console.log(client)
    console.log("first", text)
    const result = await client.query(text, params);
    // console.log(result)
    client.release();
    return result;
  } catch (error) {
    return { success: false, error: error.message };
  }
};

module.exports = { query };