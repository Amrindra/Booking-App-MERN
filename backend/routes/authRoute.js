const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello");
});

router.get("/register", (req, res) => {
  res.send("Register route");
});

module.exports = router;
