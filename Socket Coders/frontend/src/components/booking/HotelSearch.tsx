import React, { useState } from 'react';
import { Search, Calendar, Users, MapPin, DollarSign, Building } from 'lucide-react';
import { format } from 'date-fns';

interface HotelSearchProps {}

const HotelSearch: React.FC<HotelSearchProps> = () => {
  const [formData, setFormData] = useState({
    location: '',
    checkIn: '',
    checkOut: '',
    guests: '1',
    roomType: 'single',
    budget: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Hotel Search:', formData);
    // Here you would typically make an API call to search for hotels
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="relative">
        <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Where would you like to stay?"
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="relative">
        <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        <input
          type="date"
          name="checkIn"
          value={formData.checkIn}
          onChange={handleChange}
          min={format(new Date(), 'yyyy-MM-dd')}
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="relative">
        <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        <input
          type="date"
          name="checkOut"
          value={formData.checkOut}
          onChange={handleChange}
          min={formData.checkIn || format(new Date(), 'yyyy-MM-dd')}
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="relative">
        <Users className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        <select
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {[1, 2, 3, 4, 5].map(num => (
            <option key={num} value={num}>{num} Guest{num !== 1 ? 's' : ''}</option>
          ))}
        </select>
      </div>

      <div className="relative">
        <Building className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        <select
          name="roomType"
          value={formData.roomType}
          onChange={handleChange}
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="single">Single Room</option>
          <option value="double">Double Room</option>
          <option value="suite">Suite</option>
          <option value="deluxe">Deluxe Room</option>
        </select>
      </div>

      <div className="relative">
        <DollarSign className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        <select
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Budget</option>
          <option value="0-100">$0 - $100 per night</option>
          <option value="101-200">$101 - $200 per night</option>
          <option value="201-500">$201 - $500 per night</option>
          <option value="501+">$501+ per night</option>
        </select>
      </div>

      <button
        type="submit"
        className="md:col-span-3 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
      >
        <Search className="h-5 w-5" />
        <span>Search Hotels</span>
      </button>
    </form>
  );
};

export default HotelSearch