const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");
const roles = require("./role");
const { v4: uuid } = require("uuid");
const { hash } = require("bcryptjs");

class users extends Model {}

users.init(
  {
    userId: {
      type: DataTypes.STRING(60),
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING(256),
      allowNull: false,
      // unique: true,
    },
    firstName: {
      type: DataTypes.STRING(256),
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING(256),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
    mobile: {
      type: DataTypes.STRING(13),
      allowNull: false,
    },

    password: {
      type: DataTypes.STRING(256),
      allowNull: false,
    },

    roleId: {
      type: DataTypes.STRING(255),
      allowNull: false,
      references: {
        modelName: roles,
        key: "roleId",
      },
    },
  },
  {
    timestamps: true,
    paranoid: true,
    modelName: "users",
    sequelize,
  }
);

users.beforeCreate(async (user) => {
  user.userId = uuid();
  user.password = await hash(user.password, 10);
});

users.afterCreate(async (user) => {
  delete user.dataValues.password;
});

module.exports = users;
