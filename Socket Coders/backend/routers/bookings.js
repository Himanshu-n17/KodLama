const express = require('express');
const Booking = require('../models/booking');
const User = require('../models/user');
const Flight = require('../models/flight');
const Cab = require('../models/cab');
const router = express.Router();

// Create a new booking
router.post('/', async (req, res) => {
  const { userId, flightId, cabId } = req.body;
  try {
    const user = await User.findById(userId);
    const flight = await Flight.findById(flightId);
    const cab = await Cab.findById(cabId);

    if (!user || !flight || !cab) {
      return res.status(400).json({ error: 'Invalid user, flight, or cab ID' });
    }

    const newBooking = new Booking({
      user: userId,
      flight: flightId,
      cab: cabId,
    });

    // Save the new booking
    await newBooking.save();

    // Add the booking reference to the User, Flight, and Cab
    user.bookings.push(newBooking);
    flight.bookings.push(newBooking);
    cab.bookings.push(newBooking);

    await user.save();
    await flight.save();
    await cab.save();

    res.status(201).json({ message: 'Booking created successfully', booking: newBooking });
  } catch (err) {
    res.status(500).json({ error: 'Error creating booking' });
  }
});

// Delete a booking
router.delete('/:bookingId', async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.bookingId);
    if (!booking) return res.status(404).json({ error: 'Booking not found' });

    // Remove booking references from User, Flight, and Cab
    const user = await User.findById(booking.user);
    const flight = await Flight.findById(booking.flight);
    const cab = await Cab.findById(booking.cab);

    user.bookings.pull(booking._id);
    flight.bookings.pull(booking._id);
    cab.bookings.pull(booking._id);

    await user.save();
    await flight.save();
    await cab.save();

    // Delete the booking
    await booking.remove();

    res.status(200).json({ message: 'Booking deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Error deleting booking' });
  }
});

module.exports = router;
