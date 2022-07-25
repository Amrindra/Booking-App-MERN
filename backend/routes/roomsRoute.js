const express = require("express");
const {
  createRoom,
  updateRoom,
  deleteRoom,
  getRoom,
  getAllRooms,
} = require("../controller/roomController.js");
const { verifyAdmin } = require("../utils/verifyToken");

const router = express.Router();

// CREATE
// Only admin can create hotel that's why we passed only verifyAdmin here
router.post("/:hotelId", verifyAdmin, createRoom);

// UPDATE
router.put("/:id", verifyAdmin, updateRoom);

// DELETE
router.delete("/:id/:hotelId", verifyAdmin, deleteRoom);

// GET SPECIFIC HOTEL
router.get("/:id", getRoom);

//GET ALL
//Used next middleware so that we can customize our error messages
router.get("/", getAllRooms);

module.exports = router;
