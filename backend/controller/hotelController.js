const HotelModel = require("../models/HotelModel.js");

// Create Hotel
const createHotel = async (req, res, next) => {
  const newHotel = new HotelModel(req.body);

  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (error) {
    next(error);
  }
};

// Update Hotel
const updateHotel = async (req, res, next) => {
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
    next(error);
  }
};

// Delete Hotel
const deleteHotel = async (req, res, next) => {
  try {
    await HotelModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel has been deleted!");
  } catch (error) {
    next(error);
  }
};

// Get Spectific Hotel
const getHotel = async (req, res, next) => {
  try {
    const hotel = await HotelModel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (error) {
    next(error);
  }
};

// Get All Hotel
const getAllHotels = async (req, res, next) => {
  try {
    const allHotels = await HotelModel.find();
    res.status(200).json(allHotels);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createHotel,
  updateHotel,
  deleteHotel,
  getHotel,
  getAllHotels,
};
