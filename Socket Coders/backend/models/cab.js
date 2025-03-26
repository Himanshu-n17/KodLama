const mongoose = require('mongoose');

const cabSchema = new mongoose.Schema({
  cabNumber: {
    type: String,
    required: true,
  },
  driverName: {
    type: String,
    required: true,
  },
  driverPhone: {
    type: String,
    required: true,
  },
  bookings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Booking',
    },
  ],
});

const Cab = mongoose.model('Cab', cabSchema);

module.exports = Cab;


