const express = require('express');
const Cab = require('../models/cab');
const router = express.Router();

// Get all cabs
router.get('/', async (req, res) => {
    const cabs = await Cab.find();
    res.json(cabs);
});

// Book a cab
router.post('/book', async (req, res) => {
    const { cabId, seats } = req.body;
    const cab = await Cab.findById(cabId);

    if (!cab || cab.seatsAvailable < seats) {
        return res.status(400).json({ message: 'Not enough seats available' });
    }

    cab.seatsAvailable -= seats;
    await cab.save();
    res.json({ message: 'Cab booked successfully' });
});

module.exports = router;
