const sequelize = require("../bin/dbConnection");
const users = require("../models/definitions/user");
const Users = require("../models/definitions/user");
const roles = require("./definitions/role");

const models = { Users, roles };

roles.hasMany(users, { foreignKey: "roleId" }),
  users.belongsTo(roles, { foreignKey: "roleId" });

const db = {};
(db.sequelize = sequelize), (db.models = models);

module.exports = { db, models };
