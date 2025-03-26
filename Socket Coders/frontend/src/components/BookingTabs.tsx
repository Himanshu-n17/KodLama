import React, { useState } from 'react';
import { Hotel, Plane, Car } from 'lucide-react';
import HotelSearch from './booking/HotelSearch';
import FlightSearch from './booking/FlightSearch';
import CabSearch from './booking/CabSearch';

const BookingTabs = () => {
  const [activeTab, setActiveTab] = useState('hotels');

  const tabs = [
    { id: 'hotels', label: 'Hotels', icon: Hotel, component: HotelSearch },
    { id: 'flights', label: 'Flights', icon: Plane, component: FlightSearch },
    { id: 'cabs', label: 'Cabs', icon: Car, component: CabSearch },
  ];

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component || HotelSearch;

  return (
    <div>
      <div className="flex space-x-4 mb-6">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-colors ${
              activeTab === id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <Icon className="h-5 w-5" />
            <span>{label}</span>
          </button>
        ))}
      </div>
      <ActiveComponent />
    </div>
  );
};

export default BookingTabs