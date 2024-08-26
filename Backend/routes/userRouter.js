var routes = require("express").Router();
var {
  create,
  getAll,
  getUsername,
  userDelete,
} = require("../controllers/userController");
var { createUserSchema, getUser } = require("../validations/user");
routes.get("/get", getAll);
routes.post("/create", createUserSchema, create);
routes.get("/get-by-username", getUser, getUsername);
routes.delete("/delete-user", getUser, userDelete);

module.exports = routes;
