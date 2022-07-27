const express = require("express");
const {
  createHotel,
  updateHotel,
  deleteHotel,
  getHotel,
  getAllHotels,
  countByCity,
  countByType,
} = require("../controller/hotelController.js");
const HotelModel = require("../models/HotelModel.js");
// const createError = require("../utils/error.js");
const { verifyAdmin } = require("../utils/verifyToken");

const router = express.Router();

// CREATE
// Only admin can create hotel that's why we passed only verifyAdmin here
router.post("/", verifyAdmin, createHotel);

// UPDATE
router.put("/:id", verifyAdmin, updateHotel);

// DELETE
router.delete("/:id", verifyAdmin, deleteHotel);

// GET SPECIFIC HOTEL
router.get("/findHotel:id", getHotel);

//GET ALL
//Used next middleware so that we can customize our error messages
router.get("/", getAllHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);

module.exports = router;
