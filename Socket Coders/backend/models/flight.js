const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
  flightNumber: {
    type: String,
    required: true,
  },
  origin: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  departureDate: {
    type: Date,
    required: true,
  },
  arrivalDate: {
    type: Date,
    required: true,
  },
  bookings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Booking',
    },
  ],
});

const Flight = mongoose.model('Flight', flightSchema);

module.exports = Flight;
 let addData=()=>{
    let flight = new Flight({
        flightNumber: '123',
        origin: 'New York',
        destination: 'Los Angeles',
        departureDate: new Date(),
        arrivalDate: new Date(),
        });

        let booking=new Booking({
            passengerName: 'John',
            passengerEmail: 'john@example.com',
            passengerPhone: '1234567890',
            });
    
 }

 