const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Dummy GET user (simulate real DB fetch)
router.get('/users', async (req, res) => {
  try {
    res.status(200).json({
      name: 'John Doe',
      email: 'john@gmail.com',
      role: 'admin',
    });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch users', success: false });
  }
});

// Signup route
router.post('/signup', async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: 'User already exists', success: false });
    }

    const newUser = new User({ name, email, password, role });
    await newUser.save();

    res.status(201).json({
      message: 'User registered successfully',
      success: true,
      user: newUser,
    });
  } catch (error) {
    console.error("Signup error:", error.message);
    res.status(500).json({
      message: 'Error registering user',
      success: false,
      error: error.message,
    });
  }
});

// Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Invalid email or password', success: false });
    }

    res.status(200).json({
      message: 'Login successful',
      success: true,
      user,
    });
  } catch (error) {
    console.error("Login error:", error.message);
    res.status(500).json({
      message: 'Error during login',
      success: false,
      error: error.message,
    });
  }
});

module.exports = router;
