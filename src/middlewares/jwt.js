const jwt = require("jsonwebtoken");

const checkToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).send({ message: "Authorization token not found" });
  }
  next();
};

const verifyToken = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).send({ message: "Unauthorized" });
  }
};

const generateToken = (email, secretKey) => {
  return jwt.sign({ email }, secretKey);
};

module.exports = { checkToken, verifyToken, generateToken };