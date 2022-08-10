const Router = require("express").Router();
const userCtrl = require("../controllers/userCtrl");
const authMiddleware = require("../middleware/auth");

Router.route("/count").get(userCtrl.userCount);
Router.route("/:id").get(authMiddleware, userCtrl.getUserById);
Router.route("/create").post(userCtrl.register);
Router.route("/login").post(userCtrl.login);
Router.route("/edit").post(authMiddleware, userCtrl.edit);
Router.route("/register").post(userCtrl.register);

module.exports = Router;
