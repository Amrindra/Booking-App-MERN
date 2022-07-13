const jwt = require("jsonwebtoken");
const createError = require("../utils/error.js");

const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError(401, "You are not authenticated!"));
  }

  jwt.verify(token, process.env.JWT_TOKEN, (err, user) => {
    if (err) return next(createError(403, "Unvalid token!"));
    //Assigning user to req.user
    req.user = user;
    // when everything is okay run next() middleware
    next();
  });
};

module.exports = verifyToken;
