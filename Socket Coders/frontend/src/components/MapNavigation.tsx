import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapNavigation = () => {
  const mapStyles = {
    height: "400px",
    width: "100%"
  };

  const defaultCenter = {
    lat: 20.5937,
    lng: 78.9629
  };

  const locations = [
    {
      name: "Maldives",
      location: { lat: 3.2028, lng: 73.2207 }
    },
    {
      name: "Santorini",
      location: { lat: 36.3932, lng: 25.4615 }
    },
    {
      name: "Bali",
      location: { lat: -8.4095, lng: 115.1889 }
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Explore Destinations</h2>
      <div className="rounded-xl overflow-hidden shadow-lg">
        <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={3}
            center={defaultCenter}
          >
            {locations.map((item, index) => (
              <Marker
                key={index}
                position={item.location}
                title={item.name}
              />
            ))}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default MapNavigation;