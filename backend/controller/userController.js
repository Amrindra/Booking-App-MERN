const UserModel = require("../models/UserModel.js");

// Create User
const createUser = async (req, res, next) => {
  const newUser = new UserModel(req.body);

  try {
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (error) {
    next(error);
  }
};

// Update User
const updateUser = async (req, res, next) => {
  try {
    //findByIdAndUpdate in the UserModel
    //We have to pass {$set: req.body} as object to update which take req.body where we're going to update
    //and we have to pass {new: true} because findByIdAndUpdate return the previous ducument not the updated ones
    const updatedUser = await UserModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};

// Delete User
const deleteUser = async (req, res, next) => {
  try {
    await UserModel.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted!");
  } catch (error) {
    next(error);
  }
};

// Get Spectific User
const getUser = async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

// Get All Users
const getAllUsers = async (req, res, next) => {
  try {
    const allUsers = await UserModel.find();
    res.status(200).json(allUsers);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUser,
  updateUser,
  deleteUser,
  getUser,
  getAllUsers,
};
