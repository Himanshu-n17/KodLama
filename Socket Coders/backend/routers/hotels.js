const express = require('express');
const Hotel = require('../models/hotel');
const router = express.Router();

// Get all hotels
router.get('/', async (req, res) => {
    const hotels = await Hotel.find();
    res.json(hotels);
});

// Get hotels by budget
router.get('/nearby', async (req, res) => {
    const { budget } = req.query;
    const hotels = await Hotel.find({ price: { $lte: budget } });
    res.json(hotels);
});

// Book a hotel
router.post('/book', async (req, res) => {
    const { hotelId, rooms } = req.body;
    const hotel = await Hotel.findById(hotelId);
    
    if (!hotel || hotel.availableRooms < rooms) {
        return res.status(400).json({ message: 'Not enough rooms available' });
    }

    hotel.availableRooms -= rooms;
    await hotel.save();
    res.json({ message: 'Hotel booked successfully' });
});

module.exports = router;
