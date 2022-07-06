const express = require("express");
const {
  createHotel,
  updateHotel,
  deleteHotel,
  getHotel,
  getAllHotels,
} = require("../controller/hotelController.js");
const HotelModel = require("../models/HotelModel.js");
const createError = require("../utils/error.js");

const router = express.Router();

// CREATE
// The reason why we used async here just because we will connect to DB and it will take time to connect, therefore, async helps in this case
router.post("/", createHotel);

// UPDATE
router.put("/:id", updateHotel);

// DELETE
router.delete("/:id", deleteHotel);

// GET SPECIFIC HOTEL
router.get("/:id", getHotel);

//GET ALL
//Used next middleware so that we can customize our error messages
router.get("/", getAllHotels);

module.exports = router;
