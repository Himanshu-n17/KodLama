const express = require('express');
const User = require('../models/user');
const Booking = require('../models/booking');
const router = express.Router();

// Create a new user
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (err) {
    res.status(500).json({ error: 'Error registering user' });
  }
});

// Delete user and associated bookings
router.delete('/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) return res.status(404).json({ error: 'User not found' });

    // Deleting the user will trigger the pre('remove') hook to delete related bookings
    await user.remove();
    res.status(200).json({ message: 'User and associated bookings deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Error deleting user' });
  }
});

module.exports = router;
