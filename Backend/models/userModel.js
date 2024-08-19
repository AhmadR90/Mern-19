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
      const users = await models.Users.findAll();
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
