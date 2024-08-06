var routes = require("express").Router();
var { create, getAll } = require("../controllers/userController");
var {createUserSchema} =require("../validations/user")
routes.get("/get", getAll);
routes.post("/create",createUserSchema, create);

module.exports = routes;
