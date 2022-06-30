const express = require("express");
const HotelModel = require("../models/HotelModel.js");

const router = express.Router();

// CREATE
// The reason why we used async here just because we will connect to DB and it will take time to connect, therefore, async helps in this case
router.post("/", async (req, res) => {
  const newHotel = new HotelModel(req.body);

  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
