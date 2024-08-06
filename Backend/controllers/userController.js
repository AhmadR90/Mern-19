var user = [];

module.exports = {
  create: (req, res) => {
    try {
      const { username, password } = req.body;
      user.push({ username, password });

      return res.send({
        response: user,
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
