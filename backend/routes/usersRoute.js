const express = require("express");
const {
  createUser,
  updateUser,
  deleteUser,
  getUser,
  getAllUsers,
} = require("../controller/userController");
const { verifyUser, verifyAdmin } = require("../utils/verifyToken");

const router = express.Router();

//Passing verifyToken to check to see if the user is authenticated
// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("User logged in");
// });

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("Admin logged in. You can delete your account");
// });

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("User logged in. You can delete your account");
// });

// Pass verifyUser to verify if the user is the right user to update the information
// UPDATE
router.put("/:id", verifyUser, updateUser);

// DELETE
// Pass verifyUser to verify if the user is the right user to delete the information
router.delete("/:id", verifyUser, deleteUser);

// GET SPECIFIC HOTEL
router.get("/:id", verifyUser, getUser);

//GET ALL
//Passing the verifyAdmin for admin only to have access to the users
router.get("/", verifyAdmin, getAllUsers);

module.exports = router;
