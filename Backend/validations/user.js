const Joi = require("joi");

module.exports = {
  createUserSchema: async (req, res, next) => {
    const createUser = Joi.object({
      role: Joi.valid("Instructor", "Admin", "Trainee"),
      firstName: Joi.string().min(4).max(32).required(),
      lastName: Joi.string().min(4).max(32).required(),
      email: Joi.string().email().required(),
      mobile: Joi.string().required(),
      username: Joi.string().min(4).max(32).required(),
      password: Joi.string().min(6).max(18).required(),
    });
    try {
     await createUser.validateAsync(req.body);
      next();
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },

  getUser: async (req, res, next) => {
    const User = Joi.object({
      username: Joi.string().min(4).max(32),
      userId: Joi.string(),
    });
    try {
      await User.validateAsync(req.query);
      next();
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },

  getAllUserSchema: async (req, res, next) => {
    const getAllUser = Joi.object({
      pageNo: Joi.number().required(),
      limit: Joi.number().valid(3, 6).required(),
      // firstName:Joi.string().min(4).max(32).required(),
      // lastName:Joi.string().min(4).max(32).required(),
      // email:Joi.string().email().required(),
      // mobile:Joi.string().required(),
      // username: Joi.string().min(4).max(32).required(),
    });
    try {
     await getAllUser.validateAsync(req.query);
      next();
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
};
