var routes = require("express").Router();
var {
  create,
  getAll,
  getUsername,
  userDelete,
} = require("../controllers/userController");
var { createUserSchema, getUser,getAllUserSchema } = require("../validations/user");
routes.get("/get",getAllUserSchema, getAll);
routes.post("/create", createUserSchema, create);
routes.get("/get-by-username", getUser, getUsername);
routes.delete("/delete-user", getUser, userDelete);

module.exports = routes;
