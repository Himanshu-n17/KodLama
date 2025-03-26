const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  flight: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Flight',
    required: true,
  },
  cab: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cab',
    required: true,
  },
  bookingDate: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    default: 'booked', // or 'cancelled', 'completed'
  },
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;


