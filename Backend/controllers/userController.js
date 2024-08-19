//const { response } = require("../app");
const { hash } = require("bcryptjs");
const { createUser,getAllUsers } = require("../models/userModel");

module.exports = {
  create: async (req, res) => {
    // console.log(req.body);
    // res.send(req.body)

    try {
      const user = await createUser(req.body);
      res.send(user);
      if (user.error) {
        return {
          error: user.error,
        };
      }
      return {
        response: user.response,
      };
    } catch (error) {
      console.log(error);
      return res.send({
        error: error,
      });
    }
  },

  getAll: async (req, res) => {
    try {
      const users= await getAllUsers();
      if(users.error){
        return{
          error:users.error
        }
      }
      return res.send({
        response: users,
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },

  byUsername: (req, res) => {
    try {
      const { username } = req.query;
      console.log(username);
      users.map((user) => {
        if (user.username == username) {
          return res.send({
            response: user,
          });
        }
        // res.send({
        //   response: "user does not exist",
        // });
      });
      return res.send({
        response: "user does not exist",
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
};
