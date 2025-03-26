const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
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

userSchema.pre('remove', async function (next) {
  // Remove associated bookings, flights, and cabs when a user is deleted
  await Booking.deleteMany({ user: this._id });
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
