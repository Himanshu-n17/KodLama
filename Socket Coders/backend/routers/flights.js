const express = require('express');
const Flight = require('../models/flight');
const router = express.Router();

// Get all flights
router.get('/', async (req, res) => {
    const flights = await Flight.find();
    res.json(flights);
});

// Book a flight
router.post('/book', async (req, res) => {
    const { flightId, seats } = req.body;
    const flight = await Flight.findById(flightId);
    
    if (!flight || flight.seatsAvailable < seats) {
        return res.status(400).json({ message: 'Not enough seats available' });
    }

    flight.seatsAvailable -= seats;
    await flight.save();
    res.json({ message: 'Flight booked successfully' });
});

module.exports = router;
