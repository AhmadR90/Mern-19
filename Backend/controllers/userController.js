//const { response } = require("../app");
const {hash}=require("bcryptjs")
var users = [{
  username:"unique",
  password:"123456"
}];

module.exports = {
  create:async (req, res) => {
    try {
      let { username, password } = req.body;
      users.map((user) => {
        if (user.username == username) {
          return res.send({
            response: "user already exists",
          });
        }
      });

      password= await hash(password,10)
      users.push({ username, password });

      return res.send({
        response: {
          username,
          password,
        },
      });
    } catch (error) {
      console.log(error)
      return res.send({
        error: error,
      });
    }
  },

  getAll: (req, res) => {
    try {
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
      console.log(username)
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
