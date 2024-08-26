//const { response } = require("../app");
const { hash } = require("bcryptjs");
const responseHandler = require("../responseHandler");
const {
  createUser,
  getAllUsers,
  getUser,
  deleteUser,
} = require("../models/userModel");
const { getRole } = require("../models/commonModel");

module.exports = {
  create: async (req, res) => {
    // console.log(req.body);
    // res.send(req.body)

    try {
      const role = await getRole(req.body);
      if (role.error) {
        return res.send({
          error: role.error,
        });
      }
      delete req.body.role;
      req.body.roleId = role.response.dataValues.roleId;
      const user = await createUser(req.body);

      responseHandler(user, res);
      res.send(user);
    } catch (error) {
      console.log(error);
      return res.send({
        error: error,
      });
    }
  },

  getAll: async (req, res) => {
    try {
      req.query.offset=(req.query.pageNo-1)*req.query.limit;
      const users = await getAllUsers(req.query);

      responseHandler(users, res);
      res.send(users);
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },

  getUsername: async (req, res) => {
    try {
      const users = await getUser(req.query);

      responseHandler(users, res);
      res.send(users);
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  userDelete: async (req, res) => {
    try {
      const user = await deleteUser(req.query);

      // responseHandler(user, res);
      res.send(user);
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },

  // byUsername: (req, res) => {
  //   try {
  //     const { username } = req.query;
  //     console.log(username);
  //     users.map((user) => {
  //       if (user.username == username) {
  //         return res.send({
  //           response: user,
  //         });
  //       }
  //       // res.send({
  //       //   response: "user does not exist",
  //       // });
  //     });
  //     return res.send({
  //       response: "user does not exist",
  //     });
  //   } catch (error) {
  //     return res.send({
  //       error: error,
  //     });
  //   }
  // },
};
