require("dotenv").config();
const jwt = require("jsonwebtoken");

const generateToken = (credentials) => {
  return jwt.sign(credentials, process.env.TOKEN, { expiresIn: "30d" });
};

module.exports = generateToken;
