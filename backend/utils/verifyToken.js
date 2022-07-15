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

const verifyUser = (req, res, next) => {
  //Passing the verifyToken first to check the user authentication
  verifyToken(req, res, () => {
    //Checking the id if it's equal to each other and give an access/permission to admin as well
    //req.user.id is from JWT token and req.params.id is from the user id. THis is for checking the ownership and give access to the right user
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  });
};

module.exports = { verifyToken, verifyUser };
