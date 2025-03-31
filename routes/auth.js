const express = require("express");
const router = express.Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const bcrypt = require("bcryptjs");

const moment = require("moment");

// Helper to generate JWT token
const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRET || "intuit-jwt-secret",
    { expiresIn: "1d" }
  );
};

router.post("/register", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    // Check if the user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password before saving
    // const salt = await bcrypt.genSalt(10);
    // const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    user = new User({
      firstName,
      lastName,
      email,
      password,
    });

    await user.save();

    // Create and send token
    const token = generateToken(user);

    res.status(201).json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        profilePicture: user.profilePicture,
      },
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server error" });
  }
});

// For local login, passport will handle authentication
exports.loginSuccess = (req, res) => {
  res.json({ message: "Login successful", user: req.user });
};

// @route   POST /api/auth/login
// @desc    Login user with email and password
// @access  Public
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email" });
    }

    // Check if the user registered via Google
    if (!user.password) {
      return res.status(400).json({
        message: "Account was created with Google. Please use Google Sign-In.",
      });
    }

    // Check if password is correct
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: " password" });
    }

    // Create and send token
    const token = generateToken(user);

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        birthdate: user.birthdate
          ? moment(user.birthdate).format("YYYY-MM-DD") // Format birthdate
          : null, // Handle cases where birthdate is null
        occupation: user.occupation,
        adress: user.adress,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Google OAuth Routes
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    // Generate JWT token
    const token = generateToken(req.user);

    // Redirect to frontend with token
    res.redirect(
      `${
        process.env.CLIENT_URL || "http://localhost:5173"
      }/auth-callback?token=${token}`
    );
  }
);

// @route   GET /api/auth/user
// @desc    Get current user
// @access  Private
router.get(
  "/user",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user._id,
      firstName: req.user.firstName,
      lastName: req.user.lastName,
      email: req.user.email,
      profilePicture: req.user.profilePicture,
      birthdate: req.user.birthdate
        ? moment(req.user.birthdate).format("YYYY-MM-DD") // Format birthdate
        : null, // Handle cases where birthdate is null
      occupation: req.user.occupation,
      adress: req.user.adress,
    });
  }
);

//update user data
router.put("/update/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedData = req.body;

    console.log(updatedData);
    // Check if birthdate is provided and format it
    // if (updatedData.birthdate) {
    //   updatedData.birthdate = moment(updatedData.birthdate).format("YYYY-M-D"); // Format date
    // }

    const updatedUser = await User.findByIdAndUpdate(userId, updatedData, {
      new: true,
    });

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res
      .status(200)
      .json({ message: "User updated successfully", user: updatedUser });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating user", error: error.message });
  }
});

// @route   GET /api/auth/logout
// @desc    Logout user / clear session
// @access  Public
router.get("/logout", (req, res) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.json({ message: "Logged out successfully" });
  });
});

module.exports = router;
