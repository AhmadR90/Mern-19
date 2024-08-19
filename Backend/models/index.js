const  sequelize  = require("../bin/dbConnection");
const Users = require("../models/definitions/user");

const models = { Users };
const db = {};
db.sequelize = sequelize,
 db.models = models;

module.exports = { db, models };
