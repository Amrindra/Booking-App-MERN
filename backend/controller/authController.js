const UserModel = require("../models/UserModel.js");
const bcrypt = require("bcryptjs");
const createError = require("../utils/error.js");

//Register
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

// Login
const login = async (req, res, next) => {
  try {
    //Finding current user in the database if not found send back the "User not found"
    const currentUser = await UserModel.findOne({
      username: req.body.username,
    });
    if (!currentUser) return next(createError(404, "User not found"));

    //Comparing the password from user types in and password in the database
    //If it doesn't match send error message, if it does send that user
    const checkingPassword = await bcrypt.compare(
      req.body.password,
      currentUser.password
    );
    if (!checkingPassword)
      return next(createError(400, "Wrong password or username!"));

    res.status(200).json(currentUser);
  } catch (error) {
    next(error);
  }
};

module.exports = { register, login };
