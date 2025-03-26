const axios = require('axios');

// Google Maps API key (you need to replace it with your own API key)
const GOOGLE_MAPS_API_KEY = 'YOUR_GOOGLE_MAPS_API_KEY';

// Function to get nearby places (hotels, cabs) by a location
const getNearbyPlaces = async (location, radius = 5000, type = 'lodging') => {
    try {
        const response = await axios.get(
            `https://maps.googleapis.com/maps/api/place/nearbysearch/json`, 
            {
                params: {
                    location: location,  // latitude,longitude
                    radius: radius,      // radius in meters
                    type: type,          // 'lodging' for hotels, 'taxi_stand' for cabs
                    key: GOOGLE_MAPS_API_KEY
                }
            }
        );

        return response.data.results;  // returns list of places
    } catch (error) {
        console.error('Error fetching nearby places: ', error);
        return [];
    }
};

module.exports = {
    getNearbyPlaces
};
