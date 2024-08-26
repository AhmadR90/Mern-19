const users = require("./definitions/user");
const { models } = require("./index");
module.exports = {
  createUser: async (body) => {
    try {
      const user = await models.Users.create({ ...body });
      return {
        response: user,
      };
    } catch (error) {
      console.log(error);
      return {
        error: error,
      };
    }
  },
  getAllUsers: async () => {
    try {
      const users = await models.Users.findAll({
        attributes: {
          exclude: ["password", "roleId"],
        },
        include: [
          {
            model: models.roles,
            attributes: ["role", "roleId"],
          },
        ],
      });
      return {
        response: users,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },

  getUser: async ({ username, userId }) => {
    try {
      const users = await models.Users.findOne({
        where: {
          ...(userId ? { userId: userId } : { username: username }),
        },
        attributes: {
          exclude: ["password", "roleId"],
        },
        include: [
          {
            model: models.roles,
            attributes: ["role", "roleId"],
          },
        ],
      });
      return {
        response: users,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  deleteUser: async ({ username, userId }) => {
    try {
      const users = await models.Users.destroy({
        where: {
          ...(userId ? { userId: userId } : { username: username }),
        },
      });
      return {
        response: users,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
};
