const express = require("express");
const {
  createUser,
  updateUser,
  deleteUser,
  getUser,
  getAllUsers,
} = require("../controller/userController");
const verifyToken = require("../utils/verifyToken");

const router = express.Router();

router.get("/checkauthentication", verifyToken, (req, res, next) => {
  res.send("User logged in");
});

// CREATE
// The reason why we used async here just because we will connect to DB and it will take time to connect, therefore, async helps in this case
router.post("/", createUser);

// UPDATE
router.put("/:id", updateUser);

// DELETE
router.delete("/:id", deleteUser);

// GET SPECIFIC HOTEL
router.get("/:id", getUser);

//GET ALL
//Used next middleware so that we can customize our error messages
router.get("/", getAllUsers);

module.exports = router;
