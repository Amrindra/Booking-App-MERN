const UserModel = require("../models/UserModel.js");
const bcrypt = require("bcryptjs");

const register = async (req, res, next) => {
  try {
    // Using bcryptjs to hash password
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(req.body.password, salt);

    const newUser = new UserModel({
      username: req.body.username,
      email: req.body.email,
      password: hashPassword,
    });

    await newUser.save();
    res.status(200).send("User have been registered!");
  } catch (error) {
    next(error);
  }
};

module.exports = register;
