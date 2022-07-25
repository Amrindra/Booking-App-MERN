const mongoose = require("mongoose");
const RoomSchema = new mongoose.Schema(
  {
    roomName: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    maxPeople: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    // passing "number: Number" meaning that if somebody already book this room number we will notify them that is not available by passing unavailableDates: { type: [Date] }
    roomNumbers: [{ number: Number, unavailableDates: { type: [Date] } }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("RoomModel", RoomSchema);
