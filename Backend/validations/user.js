const Joi = require("joi");

module.exports = {
  createUserSchema: async(req, res, next) => {
    const createUser = Joi.object({
      username: Joi.string().min(4).max(32).required(),
      password: Joi.string().min(6).max(18).required(),
    });
    try {
      const validate = await createUser.validateAsync(req.body);
      next();
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
};
