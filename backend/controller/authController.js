const UserModel = require("../models/UserModel.js");
const bcrypt = require("bcryptjs");
const createError = require("../utils/error.js");
const jwt = require("jsonwebtoken");

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
    //Finding existed user in the database if not found send back the "User not found"
    const existedUser = await UserModel.findOne({
      username: req.body.username,
    });
    if (!existedUser) {
      return next(createError(404, "User not found!"));
    }
    //Comparing the password from user types in and password in the database
    //If it doesn't match send error message, if it does send that user
    const checkingPassword = await bcrypt.compare(
      req.body.password,
      existedUser.password
    );
    if (!checkingPassword)
      return next(createError(400, "Wrong password or username!"));
    const token = jwt.sign(
      { id: existedUser._id, isAdmin: existedUser.isAdmin },
      process.env.JWT_TOKEN
    );
    //Extracting the password and isAdmin out and send only the rest of data to the user request
    //By doing this it's saver because we don't send password to the client side
    const { password, isAdmin, ...others } = existedUser._doc;

    //By doing this it won't allow client secret to reach this cookie and it's much more secure
    res
      .cookie("access_token", token, {
        HttpOnly: true,
      })
      .status(200)
      .json({ ...others });
  } catch (error) {
    next(error);
  }
};

module.exports = { register, login };
