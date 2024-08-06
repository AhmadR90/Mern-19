var routes = require("express").Router();
var { create, getAll } = require("../controllers/userController");

routes.get("/get", getAll);
routes.post("/create", create);

module.exports = routes;
