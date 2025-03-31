const User = require("../models/User");

// Register a new user (local)
// Register a new user

exports.logout = (req, res) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.json({ message: "Logged out" });
  });
};
