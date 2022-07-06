const express = require("express");
const HotelModel = require("../models/HotelModel.js");
const createError = require("../utils/error.js");

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

// UPDATE
router.put("/:id", async (req, res) => {
  try {
    //findByIdAndUpdate in the HotelModel
    //We have to pass {$set: req.body} as object to update which take req.body where we're going to update
    //and we have to pass {new: true} because findByIdAndUpdate return the previous ducument not the updated ones
    const updatedHotel = await HotelModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (error) {
    res.status(500).json(error);
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    await HotelModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel has been deleted!");
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET SPECIFIC HOTEL
router.get("/:id", async (req, res) => {
  try {
    const hotel = await HotelModel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET ALL
//Used next middleware so that we can customize our error messages
router.get("/", async (req, res, next) => {
  try {
    const allHotels = await HotelModel.find();
    res.status(200).json(allHotels);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
