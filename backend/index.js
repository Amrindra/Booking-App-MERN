const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/authRoute.js");
const usersRoute = require("./routes/usersRoute.js");
const hotelsRoute = require("./routes/hotelsRoute.js");
const roomsRoute = require("./routes/roomsRoute.js");

const app = express();

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB);
    console.log("Connected to DB.");
  } catch (error) {
    throw error;
  }
};

// if something went wrong disconnect the DB
mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

// if something is okay connect the DB again
mongoose.connection.on("connected", () => {
  console.log("MongoDB connected");
});

// Middlewares
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.listen(8000, () => {
  connectDB();
  console.log("Server is running on port 8000");
});
