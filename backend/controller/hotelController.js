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

const countByCity = async (req, res, next) => {
  //Getting query from the URL that contains city names. Split each city using .split() method to return array of each city
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map((city) => {
        //HotelModel.countDocuments({ city: city }) returning the length of the city array
        return HotelModel.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (error) {
    next(error);
  }
};

//This function is counting by type of hotel from what we have in the database
const countByType = async (req, res, next) => {
  try {
    //countDocuments({ type: "Hotel" }) meaning that get the type of hotel from database and count them
    const hotelCount = await HotelModel.countDocuments({ type: "Hotel" });
    const apartmentCount = await HotelModel.countDocuments({
      type: "apartment",
    });
    const resortCount = await HotelModel.countDocuments({ type: "Resort" });
    const villaCount = await HotelModel.countDocuments({ type: "Villa" });
    const cabinCount = await HotelModel.countDocuments({ type: "Cabin" });

    //sending an array of objects containing type result from the database
    //We can fetch this data from the frontend side
    res.status(200).json([
      { type: "hotel", count: hotelCount },
      { type: "apartment", count: apartmentCount },
      { type: "resorts", count: resortCount },
      { type: "villas", count: villaCount },
      { type: "cabins", count: cabinCount },
    ]);
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
  countByCity,
  countByType,
};
