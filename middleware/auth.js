require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../model/userModel");

const auth = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.TOKEN);

      const user = await User.findOne({ _id: decoded._id });

      req.user = user;

      next();
    } catch (error) {
      console.log(error.message);
    }
  }
};

module.exports = auth
