const UserModel = require("../models/UserModel.js");

const register = async (req, res, next) => {
  try {
    const newUser = new UserModel({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = register;
