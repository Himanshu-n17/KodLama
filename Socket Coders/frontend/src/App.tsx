import React from 'react';
import { Plane, Hotel, Car, Map, Search, Calendar, Users } from 'lucide-react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import BookingTabs from './components/BookingTabs';
import PopularDestinations from './components/PopularDestinations';
import MapNavigation from './components/MapNavigation';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=2400")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold text-white mb-6 text-center">
              Your Journey Begins Here
            </h1>
            <p className="text-xl text-white mb-12 text-center max-w-2xl">
              Discover amazing places, book your stay, and travel with comfort
            </p>
            
            {/* Search Section */}
            <div className="w-full max-w-6xl bg-white rounded-lg shadow-xl p-6">
              <BookingTabs />
              <SearchBar />
            </div>
          </div>
        </div>
      </div>

      {/* Map Navigation */}
      <MapNavigation />

      {/* Popular Destinations */}
      <PopularDestinations />
    </div>
  );
}

export default App;