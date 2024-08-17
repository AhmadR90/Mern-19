var routes = require("express").Router();
var { create, getAll, byUsername } = require("../controllers/userController");
var { createUserSchema, getUser } = require("../validations/user");
routes.get("/get", getAll);
routes.post("/create", createUserSchema, create);
routes.get("/get-by-username", getUser, byUsername);

module.exports = routes;
