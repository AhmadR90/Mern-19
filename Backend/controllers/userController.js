var user = [];

module.exports = {
  create: (req, res) => {
    try {
      const newUser={...req.body}
      user.push(req.body);

      return res.send({
        response: newUser,
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
        response: user,
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
};
