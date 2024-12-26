const Router = require("express").Router();
const login = require("../apis/login");
const register = require("../apis/register");

Router.get("/", (req, res) => {
  return res.status(200).json({
    message: "server started",
  });
});

Router.post("/login", login);
Router.post("/register", register);

module.exports = Router;