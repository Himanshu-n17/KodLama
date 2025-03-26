// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const dotenv = require('dotenv');

// dotenv.config();

// const app = express();
// const PORT = 5000;

// // Middleware
// app.use(express.json());
// app.use(cors());

// // MongoDB Connection
// mongoose.connect('mongodb://localhost:27017/travelbooking', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }).then(() => console.log('MongoDB Connected'))
//   .catch(err => console.log(err));

// // Routes
// app.use('/api/auth', require('./routes/auth'));
// app.use('/api/hotels', require('./routes/hotels'));
// app.use('/api/flights', require('./routes/flights'));
// app.use('/api/cabs', require('./routes/cabs'));
// app.use('/api/bookings', require('./routes/bookings'));

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });


const mongoose = require('mongoose');
const User = require('./models/user');
const Flight = require('./models/flight');
const Cab = require('./models/cab');
const Booking = require('./models/booking');

// // Example user data
// const users = [
//   {
//     name: "John Doe",
//     email: "johndoe@example.com",
//     password: "password123",
//     bookings: [],
//   },
//   {
//     name: "Jane Smith",
//     email: "janesmith@example.com",
//     password: "mypassword321",
//     bookings: [],
//   },
//   {
//     name: "Alice Johnson",
//     email: "alicejohnson@example.com",
//     password: "alice2025",
//     bookings: [],
//   },
//   {
//     name: "Bob Lee",
//     email: "boblee@example.com",
//     password: "bobpassword456",
//     bookings: [],
//   },
//   {
//     name: "Charlie Brown",
//     email: "charliebrown@example.com",
//     password: "charliepass789",
//     bookings: [],
//   },
// ];

// Example flight data
const flights = [
  {
    flightNumber: "AA101",
    origin: "New York",
    destination: "London",
    departureDate: new Date("2025-06-01T10:00:00Z"),
    arrivalDate: new Date("2025-06-01T20:00:00Z"),
    bookings: [],
  },
  {
    flightNumber: "BA202",
    origin: "Los Angeles",
    destination: "Paris",
    departureDate: new Date("2025-07-01T08:00:00Z"),
    arrivalDate: new Date("2025-07-01T18:00:00Z"),
    bookings: [],
  },
];

// Example cab data
const cabs = [
  {
    cabNumber: "CAB123",
    capacity: 4,
    available: true,
    bookings: [],
  },
  {
    cabNumber: "CAB456",
    capacity: 6,
    available: false,
    bookings: [],
  },
];

// Example booking data
const bookings = [
  {
    userId: null, // Will be assigned after users are created
    flightId: null, // Will be assigned after flights are created
    cabId: null, // Will be assigned after cabs are created
    date: new Date("2025-06-01T12:00:00Z"),
  },
  {
    userId: null, // Will be assigned after users are created
    flightId: null, // Will be assigned after flights are created
    cabId: null, // Will be assigned after cabs are created
    date: new Date("2025-07-01T10:00:00Z"),
  },
];

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/travel-booking', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('MongoDB Connected');

    // Create users if not already in database
    const existingUsers = await User.find();
    if (existingUsers.length === 0) {
      const createdUsers = await User.insertMany(users);
      console.log('Example users added to database');

      // After users are created, add bookings and reference user data
      bookings.forEach((booking, index) => {
        booking.userId = createdUsers[index % createdUsers.length]._id;
      });

      const createdBookings = await Booking.insertMany(bookings);
      console.log('Bookings added to database');
    }

    // Create flights if not already in database
    const existingFlights = await Flight.find();
    if (existingFlights.length === 0) {
      const createdFlights = await Flight.insertMany(flights);
      console.log('Example flights added to database');

      // After flights are created, add bookings and reference flight data
      bookings.forEach((booking, index) => {
        booking.flightId = createdFlights[index % createdFlights.length]._id;
      });
    }

    // Create cabs if not already in database
    const existingCabs = await Cab.find();
    if (existingCabs.length === 0) {
      const createdCabs = await Cab.insertMany(cabs);
      console.log('Example cabs added to database');

      // After cabs are created, add bookings and reference cab data
      bookings.forEach((booking, index) => {
        booking.cabId = createdCabs[index % createdCabs.length]._id;
      });

      // Insert bookings with reference to cabs
      await Booking.insertMany(bookings);
      console.log('Bookings with flight and cab references added to database');
    }
  })
  .catch((err) => console.log(err));
