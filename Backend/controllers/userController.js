//const { response } = require("../app");

var users = [{
  username:"unique",
  password:"123456"
}];

module.exports = {
  create: (req, res) => {
    try {
      const { username, password } = req.body;
      users.map((user) => {
        if (user.username == username) {
          return res.send({
            response: "user already exists",
          });
        }
      });
      users.push({ username, password });

      return res.send({
        response: {
          username,
          password,
        },
      });
    } catch (error) {
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
