const mongoose = require("mongoose");

const HotelSchema = new mongoose.Schema({
  hotelName: {
    type: String,
    require: true,
  },
  hotelType: {
    type: String,
    require: true,
  },
  city: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  distance: {
    type: String,
    require: true,
  },
  photos: {
    type: [String],
  },
  desc: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  rooms: {
    type: [String],
  },
  cheapestPrice: {
    type: Number,
    require: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
});

// "Hotel" this name will show in the database collection
module.exports = mongoose.model("Hotel", HotelSchema);
