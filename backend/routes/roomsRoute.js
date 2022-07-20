const express = require("express");
const {
  createRoom,
  updateRoom,
  deleteRoom,
  getRoom,
  getAllRoom,
} = require("../controller/roomController.js");
const HotelModel = require("../models/HotelModel.js");
const createError = require("../utils/error.js");
const { verifyUser, verifyAdmin } = require("../utils/verifyToken");

const router = express.Router();

// CREATE
// Only admin can create hotel that's why we passed only verifyAdmin here
router.post("/", verifyAdmin, createRoom);

// UPDATE
router.put("/:id", verifyAdmin, updateRoom);

// DELETE
router.delete("/:id", verifyAdmin, deleteRoom);

// GET SPECIFIC HOTEL
router.get("/:id", getRoom);

//GET ALL
//Used next middleware so that we can customize our error messages
router.get("/", getAllRoom);

module.exports = router;
